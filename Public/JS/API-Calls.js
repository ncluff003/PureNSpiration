import axios from 'axios';
import qs from 'qs';

export const fetchLatestPost = async () => {
  const options = {
    method: `GET`,
    url: `/blog/posts/latest`,
  };
  try {
    const response = await axios(options);
    let latest = response.data.data;
    return latest;
  } catch (error) {
    console.log(error);
  }
};
