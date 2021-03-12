//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;
    
contract ImageDatabase {
    string public name = "ImageDatabase";
    uint256 public numImage = 0;
    mapping (uint256 => Image) public images;

    struct Image {
        address payable author;
        string hash;
        string description;
        uint256 tipAmount;
        uint256 tipGoal;
    }

    event ImageCreated (
        address payable author,
        string hash,
        string description,
        uint256 id,
        uint256 tipAmount
    );

    constructor(){
    }

    function uploadImage(string memory _imgHash, string memory _imgDescription)  public {

        // Make sure the image hash exists
        require(bytes(_imgHash).length > 0);

        // Make sure the image description exists
        require(bytes(_imgDescription).length > 0);

        // Make sure the uploader address exists
        require(msg.sender!=address(0));

        //Increment image ID
        numImage++;

        //Add image to the contract
        images[numImage] = Image(payable (msg.sender), _imgHash, _imgDescription, 0, 0);

        //Trigger the event Image Created
        emit ImageCreated(payable (msg.sender), _imgHash, _imgDescription, 0, 0);
    }
}