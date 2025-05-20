import { classNames } from 'shared/lib/helpers/classNames/classNames';
import React, { memo, useEffect, useState } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { StudentsType } from 'entities/Students';
import { $api } from 'shared/api/api';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import {
    Text, TextSize, TextTheme, TextWeight,
} from 'shared/ui/Text/Text';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import EditIcon from 'shared/assets/icons/edit.svg';
import CloseBorderedIcon from 'shared/assets/icons/close-bordered.svg';
import { useNavigate } from 'react-router-dom';
import { getRouteStudentsInGroups } from 'shared/const/router';
import cls from './StudentGroupsListModal.module.scss';

interface StudentGroupsListModalProps {
    className?: string;
    onClose: () => void;
    isOpen: boolean;
    groupId: string;
}

export const StudentGroupsListModal = memo((props: StudentGroupsListModalProps) => {
    const {
        className,
        isOpen,
        onClose,
        groupId,
    } = props;
    const [studentsData, setStudentsData] = useState<StudentsType[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const onNavigateToChangeStudentsList = () => {
        navigate(`${getRouteStudentsInGroups()}?group=${groupId}`);
    };

    const fetchStudents = async () => {
        setIsLoading(true);
        const groupIdFilter = {
            id_group: Number(groupId),
        };

        const filter = encodeURIComponent(JSON.stringify(groupIdFilter));

        try {
            const res = await $api.get(`/college/students?filter=${filter}`);
            setStudentsData((res.data.data as StudentsType[]).map((student) => (
                {
                    ...student,
                    fio: `${student.user.last_name} ${student.user.first_name} ${student.user.patronymic || ''}`,
                    checked: false,
                }
            )));
            setIsLoading(false);
        } catch (err) {
            setError(err as any);
        }
    };

    useEffect(() => {
        fetchStudents();

        // eslint-disable-next-line
    }, [groupId]);

    let content;

    if (isLoading) {
        content = (
            <Skeleton height={400} width="100%" />
        );
    } else if (error) {
        content = (
            <Text
                theme={TextTheme.ERROR}
                weight={TextWeight.SEMIBOLD}
            >
                Произошла ошибка при загрузке данных, попробуйте перезагрузить страницу
            </Text>
        );
    } else {
        content = (
            studentsData && studentsData.length
                ? (
                    <ul className={cls.studentsList}>
                        {
                            studentsData.map((student) => {
                                const fio = `${student.user.last_name} ${student.user.first_name} ${student.user.patronymic || ''}`;

                                return (
                                    <li
                                        key={student.students_id}
                                        className={cls.studentsItem}
                                    >
                                        <Text
                                            weight={TextWeight.MEDIUM}
                                        >
                                            {fio}
                                        </Text>
                                    </li>
                                );
                            })
                        }
                    </ul>
                )
                : (
                    <Text
                        weight={TextWeight.MEDIUM}
                        size={TextSize.XM}
                    >
                        В данной группе отсутствуют студенты...
                    </Text>
                )
        );
    }

    return (
        <Modal
            contentClassName={classNames(cls.StudentGroupsListModal, {}, [className])}
            onClose={onClose}
            isOpen={isOpen}
            title="Студенты группы"
        >
            {content}

            <div className={cls.buttons}>
                <Button
                    theme={ButtonTheme.BACKGROUND_DARK}
                    size={ButtonSize.XS}
                    className={cls.btn}
                    onClick={onClose}
                >
                    <Text
                        size={TextSize.XS}
                        weight={TextWeight.SEMIBOLD}
                    >
                        Закрыть
                    </Text>
                    <Icon Svg={CloseBorderedIcon} />
                </Button>
                <Button
                    theme={ButtonTheme.BACKGROUND}
                    size={ButtonSize.XS}
                    className={cls.btn}
                    onClick={onNavigateToChangeStudentsList}
                >
                    <Text
                        size={TextSize.XS}
                        weight={TextWeight.SEMIBOLD}
                    >
                        Изменить состав
                    </Text>
                    <Icon className={cls.editIcon} Svg={EditIcon} />
                </Button>
            </div>
        </Modal>
    );
});
