import React, {
    memo, ReactElement, useCallback, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { SearchSelect } from 'shared/ui/SearchSelect/SearchSelect';
import { useSelector } from 'react-redux';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { Text, TextSize, TextWeight } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import CloseBorderedIcon from 'shared/assets/icons/close-bordered.svg';
import CheckIcon from 'shared/assets/icons/check.svg';
import { CToaster } from '@coreui/react';
import { Toast } from 'shared/ui/Toast/Toast';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getStandardCurriculumDetailData } from 'entities/StandardCurriculumDetail';
import cls from './WorkingCurriculumTrainingScheduleSelectEduModules.module.scss';
import {
    getWorkingCurriculumTrainingScheduleProfessionalModules,
    getWorkingCurriculumTrainingScheduleSelectedCells,
    getWorkingCurriculumTrainingScheduleSymbols,
} from '../../model/selectors/getWorkingCurriculumTrainingSchedule/getWorkingCurriculumTrainingSchedule';
import { workingCurriculumTrainingScheduleActions } from '../../model/slice/workingCurriculumTrainingScheduleSlice';
import { WorkingCurriculumProfessionalModules } from '../../model/types/workingCurriculumProfessionalModules';
import {
    fetchWorkingCurriculumProfessionalModules,
} from '../../model/services/fetchWorkingCurriculumProfessionalModules/fetchWorkingCurriculumProfessionalModules';

interface WorkingCurriculumTrainingScheduleSelectEduModulesProps {
    className?: string;
    onClose: () => void;
    isOpen: boolean;
    creditsPerHour: number;
}

export const WorkingCurriculumTrainingScheduleSelectEduModules = memo((props: WorkingCurriculumTrainingScheduleSelectEduModulesProps) => {
    const {
        className,
        onClose,
        isOpen,
        creditsPerHour,
    } = props;
    const [toast, addToast] = useState<ReactElement>();
    const toaster = useRef<HTMLDivElement | null>(null);
    const dispatch = useAppDispatch();

    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const [optionsToSelect, setOptionsToSelect] = useState<string[]>([]);
    const [units, setUnits] = useState<WorkingCurriculumProfessionalModules[]>([]);

    const standardCurriculaId = useSelector(getStandardCurriculumDetailData)?.standard_curriculum_id;
    const workingCurriculumProfessionalModules = useSelector(getWorkingCurriculumTrainingScheduleProfessionalModules);
    const selectedCells = useSelector(getWorkingCurriculumTrainingScheduleSelectedCells);
    const symbols = useSelector(getWorkingCurriculumTrainingScheduleSymbols);

    useEffect(() => {
        if (workingCurriculumProfessionalModules && workingCurriculumProfessionalModules.length) {
            setUnits(workingCurriculumProfessionalModules);
            const options = workingCurriculumProfessionalModules.map((module) => module.educational_modules_unit.name);
            setOptionsToSelect(options);
        }
    }, [workingCurriculumProfessionalModules]);

    const onCancelHandler = useCallback(() => {
        onClose();
        setSelectedItems([]);
    }, [onClose]);

    const onSelectOption = useCallback((value: string, columnName: string) => {
        const foundItem = selectedItems.filter((item) => item === value)[0];
        if (foundItem) {
            const filteredItems = selectedItems.filter((item) => item !== value);
            setSelectedItems(filteredItems);
        } else {
            setSelectedItems((prevState) => [...prevState, value]);
        }
    }, [selectedItems]);

    const onConfirmSelecting = useCallback(() => {
        if (!selectedItems.length) {
            addToast(Toast.error('Выберите хотя бы один образовательный модуль'));
            return;
        }

        const needUnitsIds: number[] = [];
        selectedItems.forEach((item) => {
            units.forEach((unit) => {
                if (item === unit.educational_modules_unit.name) {
                    needUnitsIds.push(unit.standard_curriculum_modules_unit_id);
                }
            });
        });

        const filteredSymbol = symbols!.filter((symbol) => symbol.symbol_code === 'PROFESSIONAL_MODULE')[0];
        const selectedCellsData = [...selectedCells!.cells].map((cell) => (
            {
                ...cell,
                working_curriculum_symbol_id: filteredSymbol.working_curriculum_symbol_id,
                working_curriculum_symbol: filteredSymbol,
                additional_information: {
                    standard_curriculum_modules_units_ids: needUnitsIds,
                    start: selectedCells!.cells[0].start_week,
                    end: selectedCells!.cells[selectedCells!.cells.length - 1].start_week,
                },
            }
        ));

        selectedCellsData.forEach((cell) => {
            dispatch(workingCurriculumTrainingScheduleActions.changeSelectedSymbolInData([cell, creditsPerHour]));
        });
        dispatch(workingCurriculumTrainingScheduleActions.calculateTotalFieldsInSummaryData());
        const updatedSelectedCellsData = {
            trainingCourse: selectedCells!.trainingCourse,
            cells: selectedCellsData,
            symbol: selectedCells!.symbol,
            symbolsEqual: selectedCells!.symbolsEqual,
        };

        const updatedSelectedCells = {
            ...updatedSelectedCellsData!,
            symbol: [filteredSymbol.working_curriculum_symbol_id],
            symbolsEqual: true,
        };
        dispatch(workingCurriculumTrainingScheduleActions.changeSelectedCells(updatedSelectedCells));
        dispatch(workingCurriculumTrainingScheduleActions.updateTrainingSchedule());

        onCancelHandler();
    }, [creditsPerHour, dispatch, onCancelHandler, selectedCells, selectedItems, symbols, units]);

    useEffect(() => {
        if (standardCurriculaId) {
            dispatch(fetchWorkingCurriculumProfessionalModules(String(standardCurriculaId)));
        }
    }, [dispatch, standardCurriculaId]);

    return (
        <>
            <Modal
                contentClassName={classNames(cls.WorkingCurriculumTrainingScheduleSelectEduModules, {}, [className])}
                onClose={onCancelHandler}
                isOpen={isOpen}
            >
                <SearchSelect
                    label="Выбрать образовательный модуль"
                    options={optionsToSelect}
                    optionValue={selectedItems}
                    onClickOption={onSelectOption}
                    columnName=""
                    multiSelect
                />

                <div className={cls.buttons}>
                    <Button
                        theme={ButtonTheme.BACKGROUND_DARK}
                        size={ButtonSize.XS}
                        className={cls.btn}
                        onClick={onCancelHandler}
                    >
                        <Text
                            size={TextSize.XS}
                            weight={TextWeight.SEMIBOLD}
                        >
                            Отмена
                        </Text>
                        <Icon Svg={CloseBorderedIcon} />
                    </Button>
                    <Button
                        theme={ButtonTheme.BACKGROUND}
                        size={ButtonSize.XS}
                        className={cls.btn}
                        onClick={onConfirmSelecting}
                    >
                        <Text
                            size={TextSize.XS}
                            weight={TextWeight.SEMIBOLD}
                        >
                            Выбрать
                        </Text>
                        <Icon Svg={CheckIcon} />
                    </Button>
                </div>
            </Modal>

            <CToaster
                ref={toaster}
                push={toast}
                placement="top-end"
            />
        </>
    );
});
