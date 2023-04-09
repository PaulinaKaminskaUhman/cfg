import logo from './logo.svg';
import './App.css';
import './components/recipecard'
import { RecipeCard } from './components/recipecard.jsx';



function App() {

  const cake1 = {
    image : "https://preppykitchen.com/wp-content/uploads/2022/05/Naked-Cake-Recipe-Card.jpg",
    title : "Naked Strawberry Cake",
    text : "This delicious strawberry cake is one of my most popular recipes!"
    }
    const cake2 = {
      image : "https://handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE.jpg",
      title : "Best Birthday Cake",
      text : "This Birthday Cake is a family favourite"
      }
    const cake3 = {
      image : "https://www.sainsburysmagazine.co.uk/uploads/media/720x770/03/3973-BirthdayCake-V2-1120x1460.jpg?v=1-0",
      title : "White Cholocate and Coconut Cake",
      text : "Very delicious cake for fancy events"
      }

      const cake4 = {
        image : "https://www.sainsburysmagazine.co.uk/uploads/media/720x770/03/3973-BirthdayCake-V2-1120x1460.jpg?v=1-0",
        title : "White Cholocate and Coconut Cake",
        text : "Very delicious cake for fancy events"
        }
  


  return (
    <div className="App">
      <header className="App-header">

      <div class = "row" id='webName'>
      <div class = "col-2"> <img src="https://i.ibb.co/3NRh079/5a38bcd367acf4-1945133615136677954247.png" className="App-logo" alt="logo" /></div>
      <div class = "col-10"> <h1>My Little Bakery</h1></div>
      </div>

      
        <div class = "row" >
        
        <div class = "col">        
        <RecipeCard className = "card"
        image = {cake1.image}
        title = {cake1.title}
        text = {cake1.text}  ></RecipeCard></div>

        <div class = "col"> 
        <RecipeCard className = "card"
        image = {cake2.image}
        title = {cake2.title}
        text = {cake2.text}  ></RecipeCard></div>

        <div class = "col"> 
        <RecipeCard className = "card"
        image = {cake3.image}
        title = {cake3.title}
        text = {cake3.text}  ></RecipeCard></div>
        

        <div class = "col"> 
        <RecipeCard className = "card"
        image = {cake4.image}
        title = {cake4.title}
        text = {cake4.text}  ></RecipeCard></div>
        
        
        
        </div>


        <div class = "row">
        
        <div class = "col">        
        <RecipeCard className = "card"
        image = {cake1.image}
        title = {cake1.title}
        text = {cake1.text}  ></RecipeCard></div>

        <div class = "col"> 
        <RecipeCard className = "card"
        image = {cake2.image}
        title = {cake2.title}
        text = {cake2.text}  ></RecipeCard></div>

        <div class = "col"> 
        <RecipeCard className = "card"
        image = {cake3.image}
        title = {cake3.title}
        text = {cake3.text}  ></RecipeCard></div>
        

        <div class = "col"> 
        <RecipeCard className = "card"
        image = {cake4.image}
        title = {cake4.title}
        text = {cake4.text}  ></RecipeCard></div>
        
        
        
        </div>

      </header>
    </div>
  );
}

export default App;
