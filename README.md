# Squareroot-Decomposition-Techniques
This technique is used to answer range queries. Among several other techniques that are used for the same purpose, I find this one to be the simplest of them all. Before starting off with this technique, let's analyze why do we need it and how it help us optimize the solution to a problem.


Consider following problem statement:
Given an array of length N perform following two operations on it,
1. Insert new value at index i, where 0<=i<N
2. Calculate sum of all numbers in a given range of indices L to R in the array, such that 0<=L<=R<N.

The first operation is very simple, we just need to change the value at given index in the array. This can be accomplished in O(1) time.
The naive approach to the second operation will be to loop from index L till index R while adding up all the numbers that occur in between them. In worst case, we had to loop through the entire array and hence the time complexity of this operation is O(N). If we had to perform this operation Q times, the time complexity then becomes O(Q*N), which is not good.
To optimize this, we make use of a technique called as Square Root Decomposition which performs this operation in O(√N).

What is Square Root Decomposition Technique?
As the name suggests, it has a lot to do with square roots. In this technique, we divide the array into √N blocks, where N is the size of array. If N is not a perfect square, we consider the nearest perfect square value greater than N. E.g, if N = 13, we consider N=16 and hence we divide the array into √16=4 equal blocks, each of size √16=4. One thing to notice here is that, if array is divided into √N equal blocks, each block then contains √N elements (except the last one if N is not a perfect square).

Problems based on Square Root Decomposition:
1. HackerEarth: Problems on Sqrt Decomposition
2. Codeforces: Subset Sums
3. CodeChef: HILLJUMP
