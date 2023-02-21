
import Navbar from './components/Navbar/Navbar';
import styles from "./App.module.css";
import data from "./assets/data.json";
import Features from './components/Features/Features';
import Products from './components/Products/Products';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <div className={styles.hero}>
        <div className={styles.generate_wrapper}>


          <div className={styles.header}>
            <div className={styles.heading}>Free slogan maker</div>
            <div className={styles.description}>Simply enter a term that describes your business, and get up to 1,000 relevant slogans for free.</div>
            <div className={styles.slogan_input}>
              <label htmlFor="
            ">Word for your slogan</label>
              <input type="text" />
            </div>
            <div className={styles.generate_button}>
              <button>Generate slogans</button>
            </div>


          </div>
          <div className={styles.main}>
            <div className={styles.main_heading}>
              <div className={styles.main_headingtext}> We have generated 1,023 slogans for “cozy”</div>
              <div className={styles.download_button}><button>Download All</button></div>
            </div>
            <div className={styles.outputs_wrapper}>
              {data.map(item => (
                <div className={styles.output}>

                  <div className={styles.content}>
                    {item.content}
                  </div>






                </div>
              ))}




            </div>
            <div className={styles.pagination}>
              <svg width="150" height="24" viewBox="0 0 150 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="12" fill="#146EB4" />
                <path d="M12.01 7.62L9.07 9.328V10.77L11.478 9.16V17H12.934V7.62H12.01Z" fill="white" />
                <path d="M41.198 15.992L43.452 13.892C44.894 12.534 45.65 11.694 45.65 10.308C45.65 8.6 44.404 7.438 42.556 7.438C40.708 7.438 39.448 8.614 39.378 10.434L40.4 10.644C40.456 9.216 41.268 8.404 42.542 8.404C43.76 8.404 44.586 9.174 44.586 10.322C44.586 11.512 43.858 12.184 42.78 13.164L39.434 16.286V17H45.748V15.992H41.198Z" fill="#146EB4" />
                <path d="M76.796 12.198C77.664 11.904 78.21 11.176 78.21 10.168C78.21 8.544 76.992 7.438 75.158 7.438C73.268 7.438 72.036 8.642 71.91 10.392L72.932 10.588C73.016 9.202 73.87 8.418 75.144 8.418C76.376 8.418 77.188 9.118 77.188 10.168C77.188 11.134 76.432 11.722 75.228 11.722H73.996V12.688H75.298C76.6 12.688 77.384 13.29 77.384 14.326C77.384 15.46 76.488 16.202 75.2 16.202C73.786 16.202 72.918 15.306 72.82 13.92L71.784 14.13C71.896 15.95 73.212 17.182 75.2 17.182C77.104 17.182 78.392 16.034 78.392 14.312C78.392 13.234 77.79 12.478 76.796 12.198Z" fill="#146EB4" />
                <path d="M139.198 15.992L141.452 13.892C142.894 12.534 143.65 11.694 143.65 10.308C143.65 8.6 142.404 7.438 140.556 7.438C138.708 7.438 137.448 8.614 137.378 10.434L138.4 10.644C138.456 9.216 139.268 8.404 140.542 8.404C141.76 8.404 142.586 9.174 142.586 10.322C142.586 11.512 141.858 12.184 140.78 13.164L137.434 16.286V17H143.748V15.992H139.198ZM147.271 7.62L144.373 9.328V10.392L146.879 8.754V17H147.957V7.62H147.271Z" fill="#146EB4" />
                <path d="M105.428 15.628C105.008 15.628 104.7 15.964 104.7 16.342C104.7 16.734 105.008 17.042 105.428 17.042C105.848 17.042 106.156 16.734 106.156 16.342C106.156 15.964 105.848 15.628 105.428 15.628ZM108.285 15.628C107.865 15.628 107.557 15.964 107.557 16.342C107.557 16.734 107.865 17.042 108.285 17.042C108.705 17.042 109.013 16.734 109.013 16.342C109.013 15.964 108.705 15.628 108.285 15.628ZM111.143 15.628C110.723 15.628 110.415 15.964 110.415 16.342C110.415 16.734 110.723 17.042 111.143 17.042C111.563 17.042 111.871 16.734 111.871 16.342C111.871 15.964 111.563 15.628 111.143 15.628Z" fill="#146EB4" />
              </svg>

            </div>


          </div>
        </div>
      </div>
      <Features />
      <Products />
      <Footer />





    </div>
  );
}

export default App;


