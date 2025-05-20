import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { HelmetProvider } from 'app/providers/HelmetProvider';
import { Text, TextSize, TextWeight } from 'shared/ui/Text/Text';
import MainImg from 'shared/assets/images/main.png';
import cls from './MainPage.module.scss';

interface MainPageProps {
  className?: string;
}
const MainPage = (props: MainPageProps) => {
    const {
        className,
    } = props;
    return (
        <HelmetProvider
            title="WhitePaper LMS"
        >
            <div className={classNames(cls.MainPage, {}, [className])}>
                <div
                    className={cls.content}
                >
                    <Text
                        size={TextSize.XXL}
                        weight={TextWeight.BOLD}
                    >
                        Добро пожаловать в WhitePaper LMS — современную систему управления обучением!
                    </Text>
                    <Text
                        size={TextSize.L}
                    >
                        Наша платформа создана для эффективного управления
                        образовательным процессом и упрощения ключевых бизнес-процессов
                        вуза. С LMS вы сможете:
                    </Text>
                    <ul className={cls.list}>
                        <li>
                            <Text
                                size={TextSize.M}
                            >
                                <strong>Управлять студентами и группами: </strong>
                                Ведите учет студентов, создавайте и редактируйте группы.
                            </Text>
                        </li>
                        <li>
                            <Text
                                size={TextSize.M}
                            >
                                <strong>Работать с сотрудниками: </strong>
                                Организуйте данные преподавателей и административного персонала.
                            </Text>
                        </li>
                        <li>
                            <Text
                                size={TextSize.M}
                            >
                                <strong>Настраивать специальности и квалификации: </strong>
                                Создавайте образовательные программы и определяйте уровни квалификации.
                            </Text>
                        </li>
                        <li>
                            <Text
                                size={TextSize.M}
                            >
                                <strong>Гибко управлять формами обучения: </strong>
                                Поддерживайте очное, заочное или дистанционное обучение.
                            </Text>
                        </li>
                        <li>
                            <Text
                                size={TextSize.M}
                            >
                                <strong>Организовывать практику: </strong>
                                Настраивайте учебные, производственные и другие виды практик.
                            </Text>
                        </li>
                        <li>
                            <Text
                                size={TextSize.M}
                            >
                                <strong>Создавать дисциплины и образовательные модули: </strong>
                                Разрабатывайте и структурируйте учебные дисциплины и модули.
                            </Text>
                        </li>
                        <li>
                            <Text
                                size={TextSize.M}
                            >
                                <strong>Разрабатывать учебные планы: </strong>
                                Упростите создание типовых и рабочих учебных планов на учебные годы — всё в цифровом формате, без бумажной волокиты.
                            </Text>
                        </li>
                    </ul>
                </div>
                <div
                    className={cls.img}
                >
                    <img
                        src={MainImg}
                        alt="main"
                    />
                </div>
            </div>
            <Text
                size={TextSize.XL}
                weight={TextWeight.MEDIUM}
                className={cls.descr}
            >
                <strong>Цифровизация процессов: </strong>
                Забудьте о бумажных документах! Вся работа с учебными
                планами, дисциплинами и другими данными теперь в
                одном месте. Наша LMS-система автоматизирует и
                упрощает процессы вуза, делая их прозрачными и
                удобными. Создавайте, редактируйте и управляйте
                образовательным процессом с легкостью!
            </Text>
        </HelmetProvider>

    );
};

export default MainPage;
