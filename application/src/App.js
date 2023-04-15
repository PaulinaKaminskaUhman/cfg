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
    image : "https://i0.wp.com/www.onceuponachef.com/images/2018/01/Pound-Cake_.jpg?resize=760%2C529&ssl=1",
    title : "Perfect Pound Cake",
    text : "Elegant and simple, this pound cake is a black dress of desserts!",
    }
  const cake2 = {
    image : "https://handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE.jpg",
    title : "Best Birthday Cake",
    text : "This Birthday Cake is a family favourite."
    }  
  const cake3 = {
    image : "https://images.immediate.co.uk/production/volatile/sites/2/2019/05/Olive_VicSponge1-c7a81fd-e1646863674868.jpg?quality=90&resize=700,466",
    title : "White Cholocate and Raspberry Cake",
    text : "Delicious recipe to impress your guests!"
    }

  const cake4 = {
    image : "https://images-gmi-pmc.edge-generalmills.com/c2462c96-4a12-484b-ad78-4bbc2ce6505f.jpg",
    title : "Carmel and Chocolate Cake With Whipped Cream",
    text : "This cake tastes as amazing as it looks!"
    }

  const cake5 = {
    image : "https://img.kidspot.com.au/6K3xTqMy/kk/2015/05/3635-500535-1.jpg",
    title : "Easy Chocolate Cake Recipe",
    text : "This easy chocolate cake recipe is made from simple pantry ingredients and is great for the newbie."
    }

  const cake6 = {
    image : "https://platedcravings.com/wp-content/uploads/2017/08/Moist-Lemon-Cake-Recipe-Plated-Cravings-2.jpg",
    title : "Moist Lemon Cake Recipe",
    text : "This moist Lemon Cake Recipe is fluffy, tangy and so easy to make from scratch!"
    }
  const cake7 = {
    image : "https://apriljharris.com/wp-content/uploads/2015/10/Chocolate-Raspberry-Jam-Cake.jpg",
    title : "Chocolate and Jam Cake",
    text : "This irresistible Chocolate and Raspberry Jam Cake comes together so quickly you won't believe it!"
    }
    
  const cake8 = {
    image : "https://www.simplyrecipes.com/thmb/KGjnllq33Hij5UgyLZJL2XRv3U4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Carrot-Cake-LEAD-3-81e1d3700f0241279f9ba4c2b8b6153c.jpg",
    title : "Simple Carrot Cake",
    text : "This carrot cake with pineapple and coconut is a family favorite, made every year for all sorts of celebrations from birthdays to Easter!"
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
        image = {cake5.image}
        title = {cake5.title}
        text = {cake5.text}  
        recipeText={recipe5}></RecipeCard></div>

        <div class = "col"> 
        <RecipeCard className = "card"
        image = {cake6.image}
        title = {cake6.title}
        text = {cake6.text}  
        recipeText={recipe6}></RecipeCard></div>

        <div class = "col"> 
        <RecipeCard className = "card"
        image = {cake7.image}
        title = {cake7.title}
        text = {cake7.text} 
        recipeText={recipe7}></RecipeCard></div>
        

        <div class = "col"> 
        <RecipeCard className = "card"
        image = {cake8.image}
        title = {cake8.title}
        text = {cake8.text} 
        recipeText={recipe8}></RecipeCard></div>
        
        </div>
      </header>
    </div>
  );
}

export default App;
