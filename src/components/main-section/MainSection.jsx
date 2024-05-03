import './mainstyle.css'
function MainSection(){
  return (
    <>
    <div id="main-section">
        <img src="https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="cant dispaly" />
      <div id="main-content">
        <p className='main-head'id="head-1">Let us find your</p>
        <p className='main-head' id="head-2">forever food</p>
        <p className='main-para'>Loremas ipsum dolor sit amet consectetur adipir 
         onsectetur adipisicing elit. elit. Quideit.</p>
        <div id="main-btn-box">
          <button id="search-main" className='main-btn'>Search</button>
          <button id="know-more" className='main-btn'>know More</button>
        </div>
      </div>
    </div>
   
    </>
  )
}
export default MainSection;