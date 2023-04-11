import logo from './logo.svg';
import './App.css';
import './components/recipecard'
import { RecipeCard } from './components/recipecard.jsx';
import { PopoverR } from './components/popover';
import recipe1 from'./components/recipes1';
import recipe2 from'./components/recipes2';
import recipe3 from'./components/recipes3';
import recipe4 from'./components/recipes4';
import recipe5 from'./components/recipes5';
import recipe6 from'./components/recipes6';
import recipe7 from'./components/recipes7';
import recipe8 from'./components/recipes8';



function App() {

  const cake1 = {
    image : "https://preppykitchen.com/wp-content/uploads/2022/05/Naked-Cake-Recipe-Card.jpg",
    title : "Naked Strawberry Cake",
    text : "This delicious strawberry cake is one of my most popular recipes!",
    }
  const cake2 = {
    image : "https://handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE.jpg",
    title : "Best Birthday Cake",
    text : "This Birthday Cake is a family favourit    e"
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
        text = {cake1.text}
        recipeText={recipe1}></RecipeCard></div>

        <div class = "col"> 
        <RecipeCard className = "card"
        image = {cake2.image}
        title = {cake2.title}
        text = {cake2.text}
        recipeText={recipe2}></RecipeCard></div>

        <div class = "col"> 
        <RecipeCard className = "card"
        image = {cake3.image}
        title = {cake3.title}
        text = {cake3.text}  
        recipeText={recipe3}></RecipeCard></div>
        

        <div class = "col"> 
        <RecipeCard className = "card"
        image = {cake4.image}
        title = {cake4.title}
        text = {cake4.text}
        recipeText={recipe4}></RecipeCard></div>
      </div>

    < div class = "row">
        <div class = "col">        
        <RecipeCard className = "card"
        image = {cake1.image}
        title = {cake1.title}
        text = {cake1.text}  
        recipeText={recipe5}></RecipeCard></div>

        <div class = "col"> 
        <RecipeCard className = "card"
        image = {cake2.image}
        title = {cake2.title}
        text = {cake2.text}  
        recipeText={recipe6}></RecipeCard></div>

        <div class = "col"> 
        <RecipeCard className = "card"
        image = {cake3.image}
        title = {cake3.title}
        text = {cake3.text} 
        recipeText={recipe7}></RecipeCard></div>
        

        <div class = "col"> 
        <RecipeCard className = "card"
        image = {cake4.image}
        title = {cake4.title}
        text = {cake4.text} 
        recipeText={recipe8}></RecipeCard></div>
        
        </div>
      </header>
    </div>
  );
}

export default App;
