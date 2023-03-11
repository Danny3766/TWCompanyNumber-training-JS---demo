const validCompanyNumber = (serialNum) => {
  // 實作在這裡
  const logicNum = [1, 2, 1, 2, 1, 2, 4, 1];
  let taxIDNumber = Array(...serialNum);     // 根據 test 檔案，傳入的參數是 string 型態，故第4行轉型為陣列，並利用 ... 展開字串。 
  let Sum = taxIDNumber.map((v, i) => {      // 因為要計算出邏輯乘數(logicNum)和統一編號(taxIDNumber)的乘積，使用map(v,i)方法，帶入的 v 為taxIDNumber的 value；i 為 logicNum 的 每一個元素，因為 map() 回傳的會是 Array 型態，故使用 String() 將 map()產生之結果 Array 轉型為 string。
    return String(logicNum[i] * v).split("") // 然後在使用 split("")，讓 string 轉型 Array 且每個元素有間格隔開。
  }).flat().reduce((a, b) => {               // 因為第4、6、7位數，計算出來的結果會如：['1','0','4',['1','0'],'8',['1','0'],['2','8'],'5']，其中有二維陣列，而最終我們需要的乘積之和是將所有的位數相加，故使用 flat() 方法，把陣列攤平(個人稱法：降維)，就會得到=>['1','0','4','1','0','8','1','0','2','8','5']的一維陣列。最後使用 reduce() 方法把全部的元素相加，就能得到最後結果。
    return Number(a) + Number(b);
  }, 0);
  if (taxIDNumber.length === 8) {            // 在第10行做判斷，依據 rule.pdf，修改後統一編號可以被5整除，傳入的統一編號第七位數為7。
    return (Sum % 5 === 0) || (taxIDNumber[6] === "7");
  }
};

module.exports = validCompanyNumber;
