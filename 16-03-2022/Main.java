// 2. observe the data below. 
// 	3 + 2 + 4 = 14
// 	4 + 3 + 7 = 33
// 	3 + 4 + 9 = 48
// 	3 + 1 + 8 = 11
// 	v1 + v2 + v3 = output
// Based on given data, take 3 values as input and print the expected output

import java.util.Scanner;
public class Main
{
	 static void outputVal(int number1,int number2,int number3){
         int answer = (number1*number2)+(number2*number3);
         System.out.println("v1+v2+v3 = "+answer);
     }

	public static void main(String[] args) {
		Scanner s = new Scanner(System.in);
		System.out.print("Enter number1: ");
		int variable1 = s.nextInt();

		System.out.print("Enter number2: ");
		int variable2 = s.nextInt();

		System.out.print("Enter number3: ");
		int variable3 = s.nextInt();

		outputVal(variable1, variable2, variable3);
	}
}