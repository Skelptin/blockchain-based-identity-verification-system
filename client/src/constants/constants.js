export const contractAddress = '0x3069Df81683120BFb7835e054557CB299190474e'

export const contractABI =[
  {
    "type": "constructor",
    "name": "",
    "inputs": [],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "event",
    "name": "AccessGranted",
    "inputs": [
      {
        "type": "address",
        "name": "requested",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "requestedUser",
        "indexed": true,
        "internalType": "address"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "AccessRequested",
    "inputs": [
      {
        "type": "address",
        "name": "requester",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "requestedUser",
        "indexed": true,
        "internalType": "address"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "AccountCreated",
    "inputs": [
      {
        "type": "address",
        "name": "userAddress",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "string",
        "name": "name",
        "indexed": false,
        "internalType": "string"
      },
      {
        "type": "uint256",
        "name": "age",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "type": "string",
        "name": "addr",
        "indexed": false,
        "internalType": "string"
      },
      {
        "type": "string",
        "name": "image",
        "indexed": false,
        "internalType": "string"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "function",
    "name": "allowedToAccess",
    "inputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "createUser",
    "inputs": [
      {
        "type": "string",
        "name": "_name",
        "internalType": "string"
      },
      {
        "type": "uint256",
        "name": "_dateOfBirth",
        "internalType": "uint256"
      },
      {
        "type": "string",
        "name": "_addr",
        "internalType": "string"
      },
      {
        "type": "string",
        "name": "_image",
        "internalType": "string"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "getIncomingRequests",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple[]",
        "name": "",
        "components": [
          {
            "type": "address",
            "name": "requester",
            "internalType": "address"
          },
          {
            "type": "address",
            "name": "requestedUser",
            "internalType": "address"
          },
          {
            "type": "bool",
            "name": "isAccepted",
            "internalType": "bool"
          },
          {
            "type": "uint256",
            "name": "timestamp",
            "internalType": "uint256"
          },
          {
            "type": "uint256",
            "name": "accessTime",
            "internalType": "uint256"
          }
        ],
        "internalType": "struct IVM_Final.Request[]"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getUserInfo",
    "inputs": [
      {
        "type": "address",
        "name": "_userAddress",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "name": "",
        "components": [
          {
            "type": "string",
            "name": "name",
            "internalType": "string"
          },
          {
            "type": "uint256",
            "name": "dateOfBirth",
            "internalType": "uint256"
          },
          {
            "type": "string",
            "name": "addr",
            "internalType": "string"
          },
          {
            "type": "string",
            "name": "image",
            "internalType": "string"
          },
          {
            "type": "bool",
            "name": "isVerified",
            "internalType": "bool"
          },
          {
            "type": "string",
            "name": "validationToken",
            "internalType": "string"
          }
        ],
        "internalType": "struct IVM_Final.userInfo"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "grantAccess",
    "inputs": [
      {
        "type": "address",
        "name": "_requester",
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "_customAccessTime",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "isValidator",
    "inputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "owner",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "requests",
    "inputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "requester",
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "requestedUser",
        "internalType": "address"
      },
      {
        "type": "bool",
        "name": "isAccepted",
        "internalType": "bool"
      },
      {
        "type": "uint256",
        "name": "timestamp",
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "accessTime",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "sendAccessRequest",
    "inputs": [
      {
        "type": "address",
        "name": "_requestedUser",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setUserAsValidator",
    "inputs": [
      {
        "type": "address",
        "name": "_userAddress",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "userExists",
    "inputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "users",
    "inputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "type": "string",
        "name": "name",
        "internalType": "string"
      },
      {
        "type": "uint256",
        "name": "dateOfBirth",
        "internalType": "uint256"
      },
      {
        "type": "string",
        "name": "addr",
        "internalType": "string"
      },
      {
        "type": "string",
        "name": "image",
        "internalType": "string"
      },
      {
        "type": "bool",
        "name": "isVerified",
        "internalType": "bool"
      },
      {
        "type": "string",
        "name": "validationToken",
        "internalType": "string"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "verifyUser",
    "inputs": [
      {
        "type": "address",
        "name": "_userAddress",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  }
]

  export const clientId = '85132d307848b9042fd6ed99d417915a'