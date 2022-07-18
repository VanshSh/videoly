interface IProps {
 text: string
}

const NoResult = ({ text }: IProps) => {
 return (
  <div>
   {text}
  </div>
 );
}

export default NoResult;