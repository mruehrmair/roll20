# Check ability scores
A script to check groups of inline dice rolls. Can be used to quickly create and evaluate arrays of 3d6 rolls. Convenient for OSR type games.

## Usage
!check-ability-scores [[xdy]] [[xdy]] [[xdy]] [[xdy]] [[xdy]] [[xdy]]

## Implementation
Currently the script checks if at least one roll totals 14 or more AND that there are less than two rolls totaling 6 or less.

## Examples
Input: !check-ability-scores [[4d6k3]] [[4d6k3]] [[4d6k3]] [[4d6k3]] [[4d6k3]] [[4d6k3]]\
Output: Your roll results => 4,16,16,10,18,12 

Input: !check-ability-scores [[3d6]] [[3d6]] [[3d6]] [[3d6]] [[3d6]] [[3d6]]\
Output: Your rolls are too low. Consider rerolling => 11,10,11,9,11,8
