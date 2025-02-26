import classnames from 'classnames';

interface ISliderProps {
  percent: number;
  reverse?: boolean;
}

function Slider(props: ISliderProps): React.ReactElement {
  const { percent, reverse } = props;

  return (
    <div className={classnames('slider', { 'slider--reverse': reverse })}>
      <div
        className={classnames('slider__value', {
          'slider__value--reverse': reverse,
        })}
        style={{ width: percent + '%' }}
      />
    </div>
  );
}

export default Slider;
