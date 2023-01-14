import "./dropdown.css";

const Dropdown = () => {
  return (
    <div>
      <nav className="desktop-navigation-menu">
        <div className="container">
          <ul className="desktop-menu-category-list">
            <li className="menu-category">
              <a href="#" className="menu-title">
                Ana Sayfa
              </a>
            </li>

            <li className="menu-category">
              <a href="#" className="menu-title">
                Kategoriler
              </a>

              <div className="dropdown-panel">
                <ul className="dropdown-panel-list">
                  <li className="menu-title">
                    <a href="#">Elektronik</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="#">Masaüstü</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="#">Dizüstü</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="#">Kamera</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="#">Tablet</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="#">Kulaklık</a>
                  </li>
                </ul>

                <ul className="dropdown-panel-list">
                  <li className="menu-title">
                    <a href="#">Erkek</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="#">Resmi</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="#">Günlük</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="#">Spor</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="#">Ceket</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="#">Güneş Gözlüğü</a>
                  </li>
                </ul>

                <ul className="dropdown-panel-list">
                  <li className="menu-title">
                    <a href="#">Kadın</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="#">Resmi</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="#">Günlük</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="#">Parfüm</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="#">Kozmetik</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="#">Çanta</a>
                  </li>
                </ul>
              </div>
            </li>

            <li className="menu-category">
              <a href="#" className="menu-title">
                Erkek
              </a>

              <ul className="dropdown-list">
                <li className="dropdown-item">
                  <a href="#">Tişört</a>
                </li>

                <li className="dropdown-item">
                  <a href="#">Şort ve Kot Pantalon</a>
                </li>

                <li className="dropdown-item">
                  <a href="#">Ayakkabı</a>
                </li>

                <li className="dropdown-item">
                  <a href="#">Cüzdan</a>
                </li>
              </ul>
            </li>

            <li className="menu-category">
              <a href="#" className="menu-title">
                Kadın
              </a>

              <ul className="dropdown-list">
                <li className="dropdown-item">
                  <a href="#">Elbise</a>
                </li>

                <li className="dropdown-item">
                  <a href="#">Küpe</a>
                </li>

                <li className="dropdown-item">
                  <a href="#">Bileklik</a>
                </li>

                <li className="dropdown-item">
                  <a href="#">Makyaj Setleri</a>
                </li>
              </ul>
            </li>

            <li className="menu-category">
              <a href="#" className="menu-title">
                Aksesuar
              </a>

              <ul className="dropdown-list">
                <li className="dropdown-item">
                  <a href="#">Küpe</a>
                </li>

                <li className="dropdown-item">
                  <a href="#">Yüzük</a>
                </li>

                <li className="dropdown-item">
                  <a href="#">Bileklik</a>
                </li>

                <li className="dropdown-item">
                  <a href="#">Kolye</a>
                </li>
              </ul>
            </li>

            <li className="menu-category">
              <a href="#" className="menu-title">
                Parfüm
              </a>

              <ul className="dropdown-list">
                <li className="dropdown-item">
                  <a href="#">Parfüm</a>
                </li>

                <li className="dropdown-item">
                  <a href="#">Deodorant</a>
                </li>

                <li className="dropdown-item">
                  <a href="#">Vücut Spreyi</a>
                </li>

                <li className="dropdown-item">
                  <a href="#">Oda Kokuları</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Dropdown;
