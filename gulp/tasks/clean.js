'use strict';

import del from 'del'
import config from '../config.js'

const delTask = () => {
  return del(config.dist.dist);
};

export default delTask