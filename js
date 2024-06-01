/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/
const NFT= [];

function mintNFT (rollNo ,address,stream,full_name) {
   const issue={
      "rollNo": rollNo,
      "address": address,
      "stream": stream,
      "full_name": full_name
   }
   NFT.push(issue);
   console.log("issued: "+rollNo);

}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function createNFTs () {
   for(i=0;i<NFT.length;i++){
      console.log("\nrollNo:\t\t" + NFT[i].rollNo);
      console.log("\naddress:\t\t" + NFT[i].address);
      console.log("\nstream:\t\t" + NFT[i].stream);
      console.log("\nfull_name\t:" + NFT[i].fullName);
   }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
console.log("\ntotal supply issued: " + NFT.length);
}

// call your functions below this line
mintNFT("63","solan","non medical","vivek handa");
mintNFT("78","shimla","non medical","puja handa");
mintNFT("98","kinnaur","arts","sagar handa");
mintNFT("92","kalpa","arts","tanya handa");
createNFTs ();
getTotalSupply();

