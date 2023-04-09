import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import 'bootstrap/dist/css/bootstrap.css';

const PopoverR = () => {
  return (
    <>
      {['top'].map((placement) => (
        <OverlayTrigger
          trigger="click"
          key={placement}
          placement={placement}
          overlay={
            <Popover id={`popover-positioned-${placement}`}>
              <Popover.Header as="h3">{`Popover ${placement}`}</Popover.Header>
              <Popover.Body>

              </Popover.Body>
            </Popover>
          }
        >
          <Button variant="secondary">Bake with me!</Button>
        </OverlayTrigger>
      ))}
    </>
  );
}

export {PopoverR};