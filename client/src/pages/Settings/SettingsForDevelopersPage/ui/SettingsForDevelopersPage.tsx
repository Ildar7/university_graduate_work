import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { DeleteAllStudents } from 'features/Students/DeleteAllStudents';
import { HelmetProvider } from 'app/providers/HelmetProvider';
import cls from './SettingsForDevelopersPage.module.scss';

interface SettingsForDevelopersPageProps {
    className?: string;
}
const SettingsForDevelopersPage = (props: SettingsForDevelopersPageProps) => {
    const {
        className,
    } = props;

    return (
        <HelmetProvider
            title="WhitePaper LMS - Для разработчиков"
        >
            <div className={classNames(cls.SettingsForDevelopersPage, {}, [className])}>
                <DeleteAllStudents />
            </div>
        </HelmetProvider>
    );
};

export default SettingsForDevelopersPage;
