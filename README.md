# Firebase Document Update Race Condition

This repository demonstrates a common race condition when updating nested objects in Firebase documents and provides a solution.

## Problem
The provided code snippet attempts to update a nested field within a Firebase document. However, due to the asynchronous nature of Firebase operations, there's a race condition where the data might not have fully loaded before the update attempt, causing the update to fail or overwrite unexpected data. 

## Solution
The solution uses the `update()` method instead of `set()`, which allows for updating specific fields without requiring the entire document data to be reloaded before the update.