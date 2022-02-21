import mongoose from 'mongoose';

import { DB_URL } from '@config/env';

mongoose.connect(DB_URL);
