package dynamic_programming;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

public class fibonacci {
    /**
     * The key to solve any problem using recursion/DP is to visulize the problem in
     * term of a tree, here due to memoisation time complexity is reduced from n^2
     * to n
     */
    public static double fib(int n, Map<Integer, Double> mem) {
        if (n == 1 || n == 2) // base condition or smallest subproblem
            return 1;
        if (mem.containsKey(n)) // memoisation to avoid repition of solving same subproblems hence reducing time
                                // complexity
            return mem.get(n);
        double v = fib(n - 1, mem) + fib(n - 2, mem); // solving subproblems using recursion
        mem.put(n, v); // storing the result of subproblems
        return mem.get(n);// return the final result of the problem
    }

    // here time complexity is n^2
    public static double fibrec(int n) {
        if (n == 1 || n == 2)
            return 1;
        return fibrec(n - 1) + fibrec(n - 2);
    }

    public static void main(String[] args) {
        // fibonacci series is 1,1,2,3,5,8,13
        Map<Integer, Double> memoisation = new ConcurrentHashMap<>();
        double dynamic_programming = fib(50, memoisation);
        System.out.println("nth no of fibonacci is " + dynamic_programming);
        double rec = fibrec(50);
        System.out.println("nth no of fibonacci is " + rec);
    }

}