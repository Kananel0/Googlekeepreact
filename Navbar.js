import "./Navbar.css";

function Navbar() {
    return (
      <nav>
        <div className="logo-area">
          <div className="tooltip">
            <span className="material-symbols-outlined hover">menu</span>
            <span className="tooltip-text">Main Menu</span>
          </div>
          <img
            className="gb_Hc gb_Hd"
            src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
            alt="Google Keep Logo"
          />
          <span className="logo-text">Keep</span>
        </div>
        <div className="search-area">
          <div className="tooltip">
            <span className="material-symbols-outlined hover">search</span>
            <span className="tooltip-text">Search</span>
          </div>
          <input type="text" placeholder="Search" />
        </div>
      
        <div className="profile-actions-area">
           
          
          <div className="tooltip"></div>
          <span className="material-symbols-outlined hover">refresh</span>
            <span className="tooltip-text">Refresh</span>
           <span className="material-symbols-outlined hover">apps</span>
            <span className="tooltip-text">Apps</span>
          <span className="material-symbols-outlined hover">view_agenda</span>
            <span className="tooltip-text">View List</span>
          <span className="material-symbols-outlined hover">settings</span>
            <span className="tooltip-text">Settings</span>
            <span className="material-symbols-outlined hover">apps</span>
            <span className="tooltip-text">Apps</span>
            <span className="material-symbols-outlined hover">account_circle</span>
            <span className="tooltip-text">Accounts</span>
            
            </div>
        
      </nav>
    );
  }
  
  export default Navbar;
  