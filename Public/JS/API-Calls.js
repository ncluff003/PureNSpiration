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

export const fetchLatestProject = async () => {
  const options = {
    method: `GET`,
    url: `/projects/latest`,
  };
  try {
    const response = await axios(options);
    let latest = response.data.data;
    return latest;
  } catch (error) {
    console.log(error);
  }
};

export const fetchProfileLinks = async () => {
  const options = {
    method: `GET`,
    url: `/about/profileLinks`,
  };
  try {
    const response = await axios(options);
    console.log(response.data);
    return latest;
  } catch (error) {
    console.log(error);
  }
};

export const fetchFoundation = async () => {
  const options = {
    method: `GET`,
    url: `/about/foundation/data`,
  };
  try {
    const response = await axios(options);
    let foundation = response.data;
    return foundation;
  } catch (error) {
    console.log(error);
  }
};

export const fetchSkills = async () => {
  const options = {
    method: `GET`,
    url: `/about/skills/data`,
  };
  try {
    const response = await axios(options);
    let skills = response.data.data.skills;
    console.log(skills);
    return latest;
  } catch (error) {
    console.log(error);
  }
};
