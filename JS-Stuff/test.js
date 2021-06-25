Students = [
  { id: '1', country: 'UK', hobbies: ['photography', 'painting'] },
  { id: '2', country: 'India', hobbies: ['reading', 'painting', 'gardening'] },
  {
    id: '3',
    country: 'France',
    hobbies: ['photography', 'gardening', 'music'],
  },
  { id: '4', country: 'Greece', hobbies: ['music', 'painting'] },
];

ChatGroups = [
  { id: '1', student_ids: ['1', '2', '3'] },
  { id: '2', student_ids: ['1', '4'] },
  { id: '3', student_ids: ['2', '4'] },
];


//Write a function that filters chat groups based on the attributes of the participants in the chat group. 
//For e.g, find all chat groups that have at least one student who is from country=France (or Hobbies=[painting, music] etc.) 


const findChatGroupByAttribute = ({country,hobbies}) => {
    const queryObj = {}
    if(!(country === undefined || country === null)){
        queryObj.country = country
    }else{
        queryObj.country = undefined;
    }

    if(Array.isArray(hobbies)){
        if(hobbies.length > 0){
            queryObj.hobbies = hobbies;
        }else{
            queryObj.hobbies = undefined
        }
    }else{
        queryObj.hobbies = undefined;
    }


    


    
}


const createHashMap = (arr,key,value) => {
    let returnSet = {};

    if(Array.isArray(arr[0][key])){
        arr.forEach(elem => {

            elem[key].forEach(e => {
                if(Array.isArray(returnSet[e])){
                    returnSet[e].push(elem.id)
                }else{
                    returnSet[e] = [elem.id]
                }
                
            })
        })
    }else{
        arr.forEach(elem => {
           if(Array.isArray(returnSet[elem[key]])){
               returnSet[elem.country].push(elem.id)
           }else{
               returnSet[elem.country] = [elem.id]
           }
        })
    }

    return  returnSet
}

console.log(createHashMap(Students,"country"))

// const attributeFilter = (studentArr,country, hobbies) => {


// }