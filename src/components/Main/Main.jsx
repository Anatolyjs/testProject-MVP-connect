import { Route, Routes } from "react-router-dom";
import styles from "./Main.module.scss";
import Categories from "./Categories/Categories";
import Home from "./Home/Home";
import Details from "./Details/Details";

const Main = () => {
  return (
    <main className={styles.main}>
        <div className={styles.main__body}>
            {/* <Categories /> */}
            <Routes>
                <Route path='/' element={ <Home />}/>
                <Route path='/event/:id' element={ <Details />} />
            </Routes>
        </div>
    </main>
  );
};

export default Main;
