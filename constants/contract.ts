import { client } from "@/app/client";
import { defineChain, getContract } from "thirdweb";
import { baseSepolia } from "thirdweb/chains";

export const contractAddress = "0x8652A34709Bc5C9e668839c70a908fd221F6524d";
export const tokenAddress = "0x902a10e465C72f475513D5B570e1E711766ae770";
export const chain = defineChain(5003)

export const contract = getContract({
    client: client,
    chain: chain,
    address: contractAddress
});

export const tokenContract = getContract({
    client: client,
    chain: chain,
    address: tokenAddress
});