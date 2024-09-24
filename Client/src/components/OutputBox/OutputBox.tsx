import { OutputComponentProps } from '../../types/Types';

const OutputBox: React.FC<OutputComponentProps> = ({ shortUrl }) => {
  return (
    <div className='text-center mt-5 border-green border px-1'>
      {shortUrl ? (
        <p>
          <a
            href={`https://aksifyy/${shortUrl}`}
            target='_blank'
            rel='noopener noreferrer'
            className='text-white'
          >
            {`https://aksifyy/${shortUrl}`}
          </a>
        </p>
      ) : (
        <p>Enter a URL to shorten it.</p>
      )}
    </div>
  );
};

export default OutputBox;
