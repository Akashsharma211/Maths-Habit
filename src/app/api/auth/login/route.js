import { NextResponse } from 'next/server';
import dbConnect from '../../../../lib/mongodb';
import User from '../../../../models/User';
import bcrypt from 'bcryptjs';

export async function POST(req) {
  try {
    const { email, password, role } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: 'Please provide both email and password' },
        { status: 400 }
      );
    }

    try {
      await dbConnect();
    } catch (dbErr) {
      console.error('MongoDB connection error:', dbErr);
      return NextResponse.json(
        { 
          success: false, 
          message: 'Database connection failed. Please ensure MongoDB is running and MONGODB_URI is set.' 
        },
        { status: 503 }
      );
    }

    // Find user by email and matching role (or check role)
    const user = await User.findOne({ email: email.toLowerCase() });

    if (!user) {
      return NextResponse.json(
        { success: false, message: 'Invalid credentials. No account found with this email.' },
        { status: 401 }
      );
    }

    // Check role if specified
    if (role && user.role !== role) {
      return NextResponse.json(
        { 
          success: false, 
          message: `This account is registered as a ${user.role}. Please switch to the ${user.role} tab to log in.` 
        },
        { status: 403 }
      );
    }

    // Verify password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json(
        { success: false, message: 'Invalid password. Please try again.' },
        { status: 401 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: `Welcome back, ${user.name}! (${user.role.toUpperCase()} Portal Access Granted)`,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
          grade: user.grade,
          phone: user.phone,
          studentName: user.studentName,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Server error occurred during login.' },
      { status: 500 }
    );
  }
}
