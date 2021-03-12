import { expect } from "chai";
import { Contract, ContractFactory, ethers } from "ethers";

describe("Image Database Contract", function ()  {

    let ImageDatabase: ContractFactory;
    let imageDatabase: Contract;  
    
    let Image;
    let author;
    let hash;
    let description;
    

    beforeEach(async function () {
        ImageDatabase = await ethers.getContractFactory("ImageDatabase");
    })

})