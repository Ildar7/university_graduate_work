import { classNames } from 'shared/lib/helpers/classNames/classNames';
import React, { memo, useCallback, useEffect } from 'react';
import {
    Text, TextSize, TextTheme, TextWeight,
} from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Input } from 'shared/ui/Input/Input';
import CIcon from '@coreui/icons-react';
import { cilArrowRight } from '@coreui/icons';
import { addStudentGroupsAssistantActions } from 'features/StudentGroups/Assistant/AddStudentGroups';
import cls from './AddStudentGroupsCodes.module.scss';
import {
    fetchAddStudentGroupsSpecialties,
} from '../../model/services/fetchAddStudentGroupsSpecialties/fetchAddStudentGroupsSpecialties';
import {
    getAddStudentGroupsSpecialtiesData,
    getAddStudentGroupsSpecialtiesError,
    getAddStudentGroupsSpecialtiesIsLoading,
} from '../../model/selectors/getAddStudentGroupsSpecialties/getAddStudentGroupsSpecialties';
import {
    getAddStudentGroupsCodesCanSend,
    getAddStudentGroupsCodesData,
} from '../../model/selectors/getAddStudentGroupsCodes/getAddStudentGroupsCodes';
import { AddStudentGroupsCodesField } from '../../model/types/addStudentGroupsCodes';
import { generateGroups } from '../../model/services/generateGroups/generateGroups';

interface AddStudentGroupsCodesProps {
    className?: string;
    changeActiveTab: (value: number) => void;
    returnToStudentGroupsPage: () => void;
}

function checkNullValues(arr: AddStudentGroupsCodesField[]): boolean {
    return arr.every((obj) => Object.values(obj).every((val) => val !== null));
}

export const AddStudentGroupsCodes = memo((props: AddStudentGroupsCodesProps) => {
    const {
        className,
        changeActiveTab,
        returnToStudentGroupsPage,
    } = props;
    const dispatch = useAppDispatch();

    const specialties = useSelector(getAddStudentGroupsSpecialtiesData);
    const isLoadingSpecialties = useSelector(getAddStudentGroupsSpecialtiesIsLoading);
    const errorSpecialties = useSelector(getAddStudentGroupsSpecialtiesError);

    const codes = useSelector(getAddStudentGroupsCodesData);
    const canSendCodes = useSelector(getAddStudentGroupsCodesCanSend);

    const changeInputValue = (specialtyId: number, code: string) => {
        const regex = /[^а-яА-Я]/g;
        const changedCode = code.replace(regex, '');
        dispatch(addStudentGroupsAssistantActions.changeCode([String(specialtyId), changedCode]));
    };

    const onNextHandler = useCallback(() => {
        changeActiveTab(3);
        dispatch(generateGroups());
    }, [changeActiveTab, dispatch]);

    useEffect(() => {
        dispatch(fetchAddStudentGroupsSpecialties());
    }, [dispatch]);

    useEffect(() => {
        dispatch(addStudentGroupsAssistantActions.changeCanSendCodes(checkNullValues(codes || [])));
    }, [codes, dispatch]);

    let form;

    if (isLoadingSpecialties) {
        form = (
            <Skeleton height={500} width="100%" />
        );
    } else if (errorSpecialties) {
        form = (
            <Text
                theme={TextTheme.ERROR}
                size={TextSize.M}
                weight={TextWeight.SEMIBOLD}
            >
                Произошла ошибка при загрузке данных, попробуйте перезагрузить страницу
            </Text>
        );
    } else {
        form = (
            <div className={cls.form}>
                {specialties?.map((specialty) => {
                    const codeValue = Object.values(codes?.filter((code) => code[specialty.speciality_id])[0] || [])[0];

                    return (
                        <div
                            key={specialty.speciality_id}
                            className={cls.item}
                        >
                            <Input
                                readOnly
                                value={specialty.specialty.speciality}
                                className={cls.itemInputSpecialty}
                            />
                            <div
                                className={cls.itemArrow}
                            >
                                <CIcon
                                    icon={cilArrowRight}
                                    className={cls.arrowIcon}
                                />
                            </div>
                            <Input
                                placeholder="ТП"
                                className={cls.itemInputCode}
                                value={codeValue || ''}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    changeInputValue(specialty.speciality_id, e.target.value);
                                }}
                            />
                        </div>
                    );
                })}
            </div>
        );
    }

    const nextBtnDisabled = isLoadingSpecialties || !!errorSpecialties || !canSendCodes || !codes?.length;

    return (
        <>
            <div className={classNames(cls.AddStudentGroupsCodes, {}, [className])}>
                <Text
                    size={TextSize.XL}
                    weight={TextWeight.SEMIBOLD}
                >
                    Укажите коды групп студентов
                </Text>
                <Text
                    size={TextSize.XM}
                    weight={TextWeight.MEDIUM}
                    className={cls.descr}
                >
                    В рамках данного шага необходимо указать коды групп на основе
                    специальностей, используя которые ассистент автоматически
                    назначит названия группам. Для каждой специальности необходимо
                    указывать только текстовый код группы. Например: для
                    программистов в качестве кода нужно писать только "ТП" а не "23ТП-41".
                </Text>

                {form}
            </div>

            <div className={cls.settings}>
                <Button
                    theme={ButtonTheme.ERROR}
                    className={cls.backBtn}
                    onClick={returnToStudentGroupsPage}
                >
                    <Text
                        size={TextSize.XS}
                        weight={TextWeight.SEMIBOLD}
                    >
                        Отмена
                    </Text>
                </Button>
                <Button
                    className={cls.nextBtn}
                    onClick={onNextHandler}
                    title={nextBtnDisabled ? 'Заполните все поля' : undefined}
                    disabled={nextBtnDisabled}
                >
                    <Text
                        size={TextSize.XS}
                        weight={TextWeight.SEMIBOLD}
                    >
                        Далее
                    </Text>
                </Button>
            </div>
        </>

    );
});
