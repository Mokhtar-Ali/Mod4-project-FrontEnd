import React from 'react'

function Tools(props) {

    // console.log(props.cutTree, "cutting tree?")
  return (
    <div className="tools">
      <h6>Tools</h6>
      <button onClick={props.plantTree}><img src="https://media.istockphoto.com/vectors/illustration-of-human-hand-holding-green-small-tree-image-for-vector-id517049638?k=6&m=517049638&s=612x612&w=0&h=FNpXoH_gDwAlKBzYalzeSvZ3Hh8DfvcURin7nYz3x6g=" alt="seedling" class="img-size"/></button>
      <button onClick={props.waterTree}> <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fst2.depositphotos.com%2F1060654%2F8908%2Fv%2F950%2Fdepositphotos_89087864-stock-illustration-watering-can-vector.jpg" alt="watering-can" class="img-size"/> </button>
      <button onClick={props.cutTree}><img src="https://static.vecteezy.com/system/resources/previews/000/516/135/original/axe-in-the-stump-vector-illustration.jpg" alt="axe" class="img-size" /></button>
    </div>
  );
}

export default Tools;
