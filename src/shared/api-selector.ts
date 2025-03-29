/**
 *
 * @param url string representing the url for the repository
 * @returns a string representing the vcs used for code reviewing
 */
const apiSelector = (url: string): string => {
  switch (true) {
    case /github/.test(url):
      // TODO!: implement logger like winston or something...
      console.log('Using GitHub to review code.');
      return 'github';
    case /gitlab/.test(url):
      console.log('Using GitLab to review code.');
      return 'gitlab';
    case /bitbucket/.test(url):
      console.log('Using BitBucket to review code.');
      return 'bitbucket';
  }

  return '';
};

export default apiSelector;
