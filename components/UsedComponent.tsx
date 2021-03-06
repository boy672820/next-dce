import { toast } from 'react-toastify';

export default function UsedComponent() {
  const handleClick = () => {
    toast('Copy!');
  };

  return (
    <div className='used'>
      <h1>Used Component😄</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque quidem
        corporis, et iste nobis excepturi magnam earum praesentium voluptatem
        accusamus, nesciunt repudiandae exercitationem aperiam quos vel rem
        quibusdam officiis maiores.
      </p>

      <button type='button' onClick={handleClick}>
        Copy
      </button>
    </div>
  );
}
