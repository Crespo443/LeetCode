const maximumWealth = (accounts) => {
    return Math.max(...accounts.map(account => account.reduce((acc, curr) => acc + curr, 0)))
}

const accounts = [[7,1,3],[2,8,7],[1,9,5]]
const maxWealth = maximumWealth(accounts)
console.log(maxWealth)