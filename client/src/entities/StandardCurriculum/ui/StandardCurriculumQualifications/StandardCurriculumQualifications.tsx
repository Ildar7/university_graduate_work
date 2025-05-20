import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { Text, TextWeight } from 'shared/ui/Text/Text';
import { AddStandardCurriculumData } from 'features/StandardCurriculum/AddStandardCurriculum';
import { useSelector } from 'react-redux';
import { getQualificationsData, getQualificationsError, getQualificationsIsLoading } from 'entities/Qualifications';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import cls from './StandardCurriculumQualifications.module.scss';

interface StandardCurriculumQualificationsProps {
    className?: string;
    data?: AddStandardCurriculumData;
}
export const StandardCurriculumQualifications = (props: StandardCurriculumQualificationsProps) => {
    const {
        className,
        data,
    } = props;

    const qualifications = useSelector(getQualificationsData);
    const usingQualIds = data?.structure.qualifications.map((qualification) => qualification.qualification_id);

    return (
        <div className={classNames(cls.StandardCurriculumQualifications, {}, [className])}>
            <Text
                weight={TextWeight.MEDIUM}
            >
                Квалификации
            </Text>
            <div className={cls.wrapper}>
                {
                    usingQualIds && usingQualIds.length
                        ? usingQualIds?.map((qualId) => (
                            qualifications?.data.filter((qualification) => qualification.id_qual === qualId).length
                                ? (
                                    <Text
                                        key={qualId}
                                    >
                                        {qualifications?.data.filter((qualification) => qualification.id_qual === qualId)[0].shifr_qual}
                                        {' '}
                                        -
                                        {' '}
                                        {qualifications?.data.filter((qualification) => qualification.id_qual === qualId)[0].qualification}
                                    </Text>
                                )
                                : ''
                        )) : (
                            <Text>
                                Тут пока пусто...
                            </Text>
                        )
                }
            </div>
        </div>
    );
};
