import { OutputComponentProps } from '../../types/Types';

const OutputBox: React.FC<OutputComponentProps> = ({ shortUrl }) => {
  return (
    <div className='text-center mt-5  p-1'>
      {shortUrl ? (
        <p>
          <a
            href={`http://localhost:8000/${shortUrl}`}
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-900 hover:border-b-2 hover:border-blue-900 '
          >
            {`tof.fy/${shortUrl}`}
          </a>
        </p>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default OutputBox;
