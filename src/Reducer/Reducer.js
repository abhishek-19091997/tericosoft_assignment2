var initialData = {
  datas: [],
};

const dataReducer = (storeData = initialData, action) => {
  switch (action.type) {
    case "DATA": {
      return {
       
        datas: [...storeData.datas, action.payload],
      };
    }
    
    default: {
      return storeData;
    }
  }
};
export default dataReducer;
