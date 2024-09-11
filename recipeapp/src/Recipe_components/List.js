const List = (Loading,Error,Recipes) => {
  if (Loading){
    return(
      <div className="d-flex justify-content-center">
  <div className="spinner-border" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
</div>

    )
  }
    return (
        <>
            <div className="row  py-5" style={{ backgroundColor: "#F2F2F2 !important" }}>
  <div className="col-md-10 offset-md-1">
    <h3 style={{ marginBottom: 30 }} className="text-center">
      Recipes
    </h3>
    <div className="row">
     
     
    {
        Recipes.length > 0 ? Recipes.map((recipe,index) => {
          return(
            <div className="col-md-4 my-4" key={index}>
            <img src={recipe.image } className="img-fluid" alt="foods"/>
            <div className="descriptions pix">
              <h6>{recipe.name}</h6>
              <p>
                <b>Ingredients</b>: {recipe.ingredients}
              </p>
            </div>
          </div>
          )
        }):<p>Recipes not available</p>
      
      }
     
     
     
      
      
    </div>
  </div>
</div>

        </>
    )
}

export default List