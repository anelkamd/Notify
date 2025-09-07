import { CreateNotebookButton } from "@/components/create-notebook-button";
import NotebookCard from "@/components/notebook-card";
import { PageWrapper } from "@/components/page-wrapper";
import { getNotebooks } from "@/server/notebooks";
import { BookOpen, PlusCircle } from "lucide-react";

export default async function Page() {
  const notebooks = await getNotebooks();

  return (
    <PageWrapper breadcrumbs={[]}>
      {/* Header */}
      <div className="mb-10 space-y-4">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          Dashboard
        </h1>
        <p className="text-muted-foreground max-w-2xl text-sm">
          Welcome back 👋 Here’s an overview of your workspace. Manage your
          notebooks and keep everything organized in one place.
        </p>
      </div>

      {/* Quick actions / Stats */}
      <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-2xl border bg-card p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <BookOpen className="size-6 text-primary" />
            <h3 className="text-lg font-semibold">Total Notebooks</h3>
          </div>
          <p className="mt-4 text-3xl font-bold">
            {notebooks.success ? notebooks.notebooks.length : 0}
          </p>
        </div>

        <div className="rounded-2xl border bg-card p-6 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold">Create a new Notebook</h3>
            <p className="text-muted-foreground mt-2 text-sm">
              Start fresh with a new notebook for your ideas and projects.
            </p>
          </div>
          <div className="mt-4">
            <CreateNotebookButton />
          </div>
        </div>
      </div>

      {/* Notebooks section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Your Notebooks</h2>

        {notebooks.success && notebooks?.notebooks?.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {notebooks.notebooks.map((notebook) => (
              <NotebookCard key={notebook.id} notebook={notebook} />
            ))}
          </div>
        ) : (
          /* Empty state */
          <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-12 text-center">
            <PlusCircle className="mb-4 size-10 text-muted-foreground" />
            <h3 className="text-lg font-medium">No notebooks yet</h3>
            <p className="text-muted-foreground mb-6 mt-2 max-w-sm text-sm">
              Start by creating your first notebook to organize your notes.
            </p>
            <CreateNotebookButton />
          </div>
        )}
      </div>
    </PageWrapper>
  );
}
