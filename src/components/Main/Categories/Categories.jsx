import styles from './Categories.module.scss';

const list = [
    'Football',
    'Basketball',
    'Hockey',
    'Volleyball',
    'Tennis'
]

const Categories = () => {
    const categoriesList = list.map((name, index) => <Category key={index} name={name}/>);
    return <div className={styles.categories}>
        <div className={styles.categories__body}>
            {categoriesList}
        </div>
    </div>
}

const Category = ({name}) => {
    return <div className={styles.category}>
        {name}
    </div>
}

export default Categories;

