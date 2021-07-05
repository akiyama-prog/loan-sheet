
export default function PreviousIncome(props) {
    let dy = new Date();
    return dy.getFullYear()-props.year;
  }