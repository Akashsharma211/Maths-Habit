import { NextResponse } from 'next/server';
import dbConnect from '../../../../lib/mongodb';
import User from '../../../../models/User';
import bcrypt from 'bcryptjs';

export async function POST(req) {
  try {
    const { name, email, password, role, phone, grade, studentName } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { success: false, message: 'Please provide name, email, and password.' },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { success: false, message: 'Password must be at least 6 characters long.' },
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
          message: 'Database connection failed. Please ensure MongoDB is running.' 
        },
        { status: 503 }
      );
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return NextResponse.json(
        { success: false, message: 'An account with this email already exists. Please log in.' },
        { status: 409 }
      );
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user in MongoDB
    const newUser = await User.create({
      name,
      email: email.toLowerCase(),
      password: hashedPassword,
      role: role || 'student',
      phone: phone || '',
      grade: grade || 'Cambridge IGCSE Extended Math (0580)',
      studentName: studentName || '',
    });

    return NextResponse.json(
      {
        success: true,
        message: `Account created successfully for ${newUser.name}!`,
        user: {
          id: newUser._id,
          name: newUser.name,
          email: newUser.email,
          role: newUser.role,
          grade: newUser.grade,
          phone: newUser.phone,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Server error occurred during registration.' },
      { status: 500 }
    );
  }
}
