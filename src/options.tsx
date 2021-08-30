import paper from './svg/paper.svg';
import rock from './svg/rock.svg';
import scissors from './svg/scissors.svg';

export const OPTIONS: IOption[] = [
    {
        name: 'Rock',
        icon: rock
    },
    {
        name: 'Paper',
        icon: paper
    },
    {
        name: 'Scissors',
        icon: scissors
    },
]

type IOption = {
    name: "Rock" | "Paper" | "Scissors";
    icon: SVGElement
}