// general purpose form handler
const processForm = (form) => {};

// return layer to be toggled
const toggleLayers = (form, map) => {
  // Add a custom event listener to the map
  // let active = [];

  form.onchange = (e) => {
    const layer = e.target.value;
    const visibility = e.target.checked ? "visible" : "none";
    const legendShow = e.target.checked ? "block" : "none";
    const legendHide = e.target.checked ? "none" : "block";

    // if (checked) active.push(layer);
    // console.log(layer);
    if (layer === "retail") {
      // alert("Hello! I am an alert box!!");
      map.setLayoutProperty("retail", "visibility", visibility);
      map.setLayoutProperty("retail2", "visibility", visibility);
    } else if (layer === "transit") {
      map.setLayoutProperty("septa", "visibility", visibility);
      map.setLayoutProperty("njt", "visibility", visibility);
    } else if (layer === "sidewalks") {
      map.setLayoutProperty("sidewalks", "visibility", visibility);
      map.setLayoutProperty("crosswalks", "visibility", visibility);
    } else if (layer === "IPD") {
      map.setLayoutProperty("IPD", "visibility", visibility);
      map.setLayoutProperty("IPDno", "visibility", visibility);
      document.getElementById("legend-group-2").style.display = legendShow;
      document.getElementById("legend-group-1").style.display = legendHide;
      map.fire("closeAllPopups");
    } else {
      map.setLayoutProperty(layer, "visibility", visibility);
    }
  };
  // return active;
};

// const handleForms = (type, toggles, map) => {
//   switch (type) {
//     case "#mylist":
//       return toggleLayers(toggles, map);
//      default:
//        return toggleLayers(toggles, map);
//   }
// };


// export default handleForms;
export default toggleLayers;
