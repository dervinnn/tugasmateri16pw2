export const loadData = () => {
    const data = localStorage.getItem("kkData");
    return data ? JSON.parse(data) : [];
  };
  
  export const saveData = (data) => {
    localStorage.setItem("kkData", JSON.stringify(data));
  };
  