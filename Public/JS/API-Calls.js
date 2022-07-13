import axios from 'axios';
import qs from 'qs';

export const fetchAllData = async () => {
  const options = {
    method: `GET`,
    url: `/data`,
  };
  try {
    const response = await axios(options);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

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

export const fetchSpecificBlogPosts = async (term, type, page, limit) => {
  const options = {
    method: `GET`,
    url: `/blog/posts?terms=${term}&type=${type}`,
  };
  try {
    const response = await axios(options);
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchBlogPosts = async (page, limit, terms, type) => {
  const options = {
    method: `GET`,
  };
  if (!page && !limit && !terms && !type) {
    options.url = `/blog/posts`;
  }
  if (page && terms && type) {
    options.url = `/blog/posts?page=${page}&terms=${terms}&type=${type}`;
  }
  try {
    const response = await axios(options);
    return response.data.data;
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

export const fetchInterests = async () => {
  const options = {
    method: `GET`,
    url: `/about/interests/data`,
  };
  try {
    const response = await axios(options);
    let interests = response.data;
    return interests;
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
    return skills;
  } catch (error) {
    console.log(error);
  }
};
