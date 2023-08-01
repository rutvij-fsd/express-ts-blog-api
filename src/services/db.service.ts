import 'dotenv/config';
import mongoose, { ConnectOptions } from 'mongoose';

const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error('MongoDB connection URI is missing in the .env file.');
    }

    const options: ConnectOptions = {
      useUnifiedTopology: true,
    } as ConnectOptions;

    await mongoose.connect(uri, options);

    console.log('Connected to MongoDB Atlas');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

export default connectDB;
