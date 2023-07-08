# Roll20 macros
Mostly D&D 5E related

## Green Flame Blade
### Damage 2
[[floor((@{level} + 1)/6)]]d8

### Description
Green fire leaps from the target to a different creature of your choice that you can see within 5 feet of it, dealing [[ [[(floor((@{level}+1)/6))]]d8+@{intelligence_mod} ]]

## Booming Blade
### Damage 2
[[floor((@{level} + 1)/6)]]d8
### Description
The target becomes sheathed in booming energy until the start of your next turn. If the target willingly moves 5 feet or more before then, the target takes [[(floor((@{level}+1)/6))+1]]d8

## Second Wind
### Description
Once per short rest, you can use a bonus action to regain 1d10 + fighter level HP: [[1d10+[[@{level}]] ]]

## Concentration
### Macro
/me tries to maintain concentration
@{selected|wtype}&{template:atkdmg} {{rname=^{constitution-u}}} {{mod=@{selected|constitution_save_bonus}@{selected|globalsavingthrowbonus}}} {{r1=[[1d20+[[@{selected|constitution_save_bonus}]][CON+PROF]@{selected|globalsavingthrowbonus} ]]}} @{selected|rtype}+[[ @{selected|constitution_save_bonus} ]][CON+PROF]@{selected|globalsavingthrowbonus} ]]}} {{attack=1}} {{range=}} 0 {{dmg1=[[0]]}} {{dmg1type=}} 0 {{dmg2=[[0]]}} {{dmg2type=}} {{crit1=[[0[CRIT]]]}} {{crit2=[[0[CRIT]]]}} {{save=1}} {{saveattr=Constitution}} {{savedesc=or lose concentration}} {{savedc=[[[[([[ { floor(?{Damage Taken|10}/2), 10}kh1]])]][SAVE]]]}} {{desc=}}

## Great Weapon Fighting Reroll
### Damage 
2d6ro<2

## Initiative for NPCs
### Macro
/w gm %{selected|npc_init}

## Morale
### Macro
/w gm Roll: [[2d6]] Morale: @{selected|morale} Roll Morale score or lower to succeed and not flee
