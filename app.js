const contractAddress = "0xREPLACE_WITH_DEPLOYED_ADDRESS";
const contractABI = [
    "function stake(uint256 _amount) external",
    "function withdraw(uint256 _amount) external",
    "function getBalance(address _user) external view returns (uint256)"
];

let provider, signer, contract;

document.getElementById('connectBtn').addEventListener('click', async () => {
    if (window.ethereum) {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        provider = new ethers.providers.Web3Provider(window.ethereum);
        signer = provider.getSigner();
        contract = new ethers.Contract(contractAddress, contractABI, signer);
        
        document.getElementById('connectBtn').innerText = "Connected";
        updateBalance();
    } else {
        alert("Please install MetaMask!");
    }
});

async function updateBalance() {
    const address = await signer.getAddress();
    const balance = await contract.getBalance(address);
    document.getElementById('balance').innerText = ethers.utils.formatEther(balance);
}

document.getElementById('stakeBtn').addEventListener('click', async () => {
    const amount = document.getElementById('stakeAmount').value;
    const tx = await contract.stake(ethers.utils.parseEther(amount));
    await tx.wait();
    updateBalance();
});

document.getElementById('withdrawBtn').addEventListener('click', async () => {
    const amount = document.getElementById('withdrawAmount').value;
    const tx = await contract.withdraw(ethers.utils.parseEther(amount));
    await tx.wait();
    updateBalance();
});
