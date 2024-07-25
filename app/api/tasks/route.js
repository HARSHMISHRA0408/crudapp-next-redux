import connectDB from '../../../utils/db';
import Task from '../../../models/Task';
import { NextResponse } from 'next/server';

export async function GET() {
  await connectDB();
  const tasks = await Task.find({});
  return NextResponse.json(tasks);
}

export async function POST(request) {
  await connectDB();
  const data = await request.json();
  const task = await Task.create(data);
  return NextResponse.json(task);
}

export async function PUT(request) {
  await connectDB();
  const { id, ...data } = await request.json();
  const task = await Task.findByIdAndUpdate(id, data, { new: true });
  return NextResponse.json(task);
}

export async function DELETE(request) {
  await connectDB();
  const { id } = await request.json();
  await Task.findByIdAndDelete(id);
  return NextResponse.json({ success: true });
}
