import db from '../data/Mock.json'
export  function getSearch( str) {
    const searchstr = str.toLowerCase();
  return db.filter((item)=>{
    if(item.name.toLowerCase().indexOf(searchstr) !== -1){
        return true;
    }
    return false;
  })
}
